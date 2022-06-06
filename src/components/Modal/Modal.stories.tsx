import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Modal",
    component: Modal,
  } as ComponentMeta<typeof Modal>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Modals = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modals.args = {
    show: true,
    backdropStyle: {},
    onClose: ()=> console.log('clicked')
  };