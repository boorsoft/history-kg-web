import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard";

type Props = {
  title: string;
  scroll: "horizontal" | "vertical";
  type: "books" | "quiz" | "persons" | "documents";
  maxLength?: number;
};

const SectionContent = ({ scroll, type }: Props) => {
  if (type === "books") {
    return (
      <ScrollContainer scroll={scroll}>
        <BookCard title="Test" cityAndYear="test" author="test" />
        <BookCard title="Test" cityAndYear="test" author="test" />
        <BookCard title="Test" cityAndYear="test" author="test" />
      </ScrollContainer>
    );
  } else {
    return <></>;
  }
};

const Section = ({ scroll, title, type, maxLength = 10 }: Props) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent scroll={scroll} type={type} title={title} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 5px;
`;

const SectionTitle = styled.div`
  color: var(--text-color);
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
`;

const ScrollContainer = styled.div<{ scroll: string }>`
  width: 100%;
  display: flex;
  overflow-x: ${({ scroll }) => scroll === "horizontal" && "scroll"};
  overflow-y: ${({ scroll }) => scroll === "vertical" && "scroll"};
  padding: 15px 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Section;
