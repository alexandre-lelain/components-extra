/// <reference types="react" />
declare const MyCompo: ({ title, name }: MyCompoProps) => JSX.Element;
export interface MyCompoProps {
    title: string;
    name: string;
}
export default MyCompo;
