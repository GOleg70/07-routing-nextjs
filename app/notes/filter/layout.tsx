import { ReactNode } from "react";

export default function NotesFilterLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
      {modal}
    </>
  );
}
