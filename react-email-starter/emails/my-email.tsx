import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface welcomeEmailProps {
  firstName?: string;
  lastName?: string;
}

const welcomeEmail = ({ firstName, lastName }: welcomeEmailProps) => {
  const previewText = `Welcome to  AICTI ${firstName + " " + lastName}`;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Preview>{previewText}</Preview>
          <Container className="border border-solid border-[#d9d9d9] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={"https://www.aicti.net/AICTI-logo.svg"}
                width="96"
                height="72"
                alt="AICTI"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Registration Confirmation & Next Steps
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Dear Prospective Student,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for completing your registration. Please keep an eye out
              for updates regarding your course selection and class schedule. We
              will notify you as soon as any changes or additional details
              become available.
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              If you have any questions or need further assistance, feel free to
              reach out.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Best regards.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              AICTI REGISTRAR
            </Text>
            <Hr className="border border-solid border-[#d9d9d9] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Remember to follow our Linkedin.
            </Text>
            <Link href="https://www.linkedin.com/company/aicti/">
              <svg
                className="fill-[#1E3A8A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default welcomeEmail;
