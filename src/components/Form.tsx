import React, { useState } from "react";
import Sub from '../definitions/typeSub'

interface formState{
    inputValues: Sub
}


interface Props {
    newSub: (subs: Sub) => void 
  }

const Form = ({newSub}: Props) => {
  const [formState, setFormState] = useState<formState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    newSub(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={formState.nick}
        type="text"
        name="nick"
        placeholder="Nick"
      />
      <input
        onChange={handleChange}
        value={formState.subMonths}
        type="text"
        name="subMonths"
        placeholder="subMonths"
      />
      <input
        onChange={handleChange}
        value={formState.avatar}
        type="text"
        name="avatar"
        placeholder="avatar"
      />
      <textarea
        onChange={handleChange}
        value={formState.description}
        name="description"
        placeholder="description"
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
