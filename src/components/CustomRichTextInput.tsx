import React, { useCallback } from "react";
import { FC } from "react";
import {
  DefaultEditorOptions,
  RichTextInput,
  RichTextInputToolbar,
  LevelSelect,
  FormatButtons,
  AlignmentButtons,
  ListButtons,
  LinkButtons,
  QuoteButtons,
  ClearButtons,
  useTiptapEditor,
} from "ra-input-rich-text";
import Image from "@tiptap/extension-image";

type Props = {
  source: string;
};

const CustomRichTextInput: FC<Props> = ({ source, ...props }: any) => {
    const editor = useTiptapEditor();

    const addImage = useCallback(() => {
        const url = window.prompt('URL')
    
        if (url) {
          editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

  return (
    <RichTextInput
      source={source}
      editorOptions={{
        ...DefaultEditorOptions,
        extensions: [...DefaultEditorOptions.extensions, Image],
      }}
      toolbar={
        <RichTextInputToolbar>
          <LevelSelect />
          <FormatButtons />
          <AlignmentButtons />
          <ListButtons />
          <LinkButtons />
          <QuoteButtons />
          <ClearButtons />
          <div onClick={addImage}>
              Image
          </div>
        </RichTextInputToolbar>
      }
    ></RichTextInput>
  );
};

export default CustomRichTextInput;
