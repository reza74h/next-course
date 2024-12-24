import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      {/* <Body style={{ background: "#fff" }}> */}
      <Tailwind>
        {/* <Body style={body}> */}
        <Body className="bg-white">
          <Container>
            {/* <Text style={heading}>Hellow {name}</Text> */}
            <Text className="font-bold text-3xl">Hellow {name}</Text>
            <Link href="https://teachyourskills.ir">
              www.teachyourskills.ir
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
