"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { FormEvent, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateEmail = (value: string): string => {
    if (!value.trim()) {
      return "Please enter your email address.";
    }

    if (!EMAIL_PATTERN.test(value.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }

    if (emailError) {
      setEmailError(validateEmail(value));
    }
  };

  const handleBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      return;
    }

    setEmailError("");
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.success) {
        setStatus("error");
        setStatusMessage(data.error || "Subscription failed. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(
        data.message || "Thanks for subscribing! Check your inbox to confirm your subscription.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
        noValidate
      >
        <Column fillWidth maxWidth={24} gap="8" horizontal="center">
          <Row fillWidth s={{ direction: "column" }} gap="8">
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              error={!!emailError}
              errorMessage={emailError}
              disabled={status === "loading"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Row height="48" vertical="center">
              <Button
                type="submit"
                size="m"
                fillWidth
                loading={status === "loading"}
                disabled={status === "loading"}
              >
                Subscribe
              </Button>
            </Row>
          </Row>
          {statusMessage && (
            <Text
              wrap="balance"
              variant="body-default-s"
              onBackground={status === "success" ? "accent-weak" : "danger-weak"}
              aria-live="polite"
            >
              {statusMessage}
            </Text>
          )}
        </Column>
      </form>
    </Column>
  );
};
