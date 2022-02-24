import { Container, Text, css } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue500 -20%, $pink500 50%",
        }}
        weight="bold"
      >
        Alcance seu elo desejado
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
        weight="bold"
      >
        Você nunca esteve
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
        }}
        weight="bold"
      >
        Tão perto.
      </Text>
    </div>
  );
}
