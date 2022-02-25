import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography as TypographyComponent } from "../components";

export default {
  title: "Components/Typography",
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

export const Small: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Display Small</TypographyComponent>
);

Small.args = {
  variant: "displaySmall",
};

export const Medium: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Display Medium</TypographyComponent>
);

Medium.args = {
  variant: "displayMedium",
};

export const Large: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Display Large</TypographyComponent>
);

Large.args = {
  variant: "displayLarge",
};

export const H2: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>H2</TypographyComponent>
);

H2.args = {
  variant: "h2",
};

export const H1: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>H1</TypographyComponent>
);

H1.args = {
  variant: "h1",
};
