import AudioPlayer from "./AudioPlayer.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "Components/AudioPlayer",
    component: AudioPlayer,
} satisfies Meta<typeof AudioPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
