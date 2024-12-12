import { Link } from 'expo-router';

type ILink = {
  href: string,
  text:string,
}

const LinkInternal = ({href, text}:ILink) => {
  return (
    <Link href={href}>{text}</Link>
  );
}

export default LinkInternal;