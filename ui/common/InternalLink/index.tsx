import { Link } from 'expo-router';

export type ILink = {
  href: string,
  text:string,
}

export const InternalLink = ({href, text}:ILink) => {
  return (
    <Link href={href}>{text}</Link>
  );
}