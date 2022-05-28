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
  RichTextInputProps
} from "ra-input-rich-text";
import Image from "@tiptap/extension-image";

const CustomRichTextInput: FC<RichTextInputProps> = ({...props}: RichTextInputProps) => {

    const editor = useTiptapEditor()

    const addImage = useCallback(() => {
        const url = window.prompt('URL')
    
        if (url) {
          editor.chain().focus().setImage({src: url}).run();  
        }

    }, [])

  return (
    <RichTextInput
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
      {...props}
    ></RichTextInput>
  );
};

export default CustomRichTextInput;
