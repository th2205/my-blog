import Text from "@/components/Text";
import Link from "@/components/common/Link";
import styled from "@emotion/styled";

interface Props {
  gitGubUrl: string;
  email: string;
  phone: string;
}

export function MyInfo({ gitGubUrl, email, phone }: Props) {
  return (
    <Container>
      <div>
        <Text as="span">Github : </Text>
        <Link targetBlank href={gitGubUrl} theme="primary">
          <Text as="span" theme="primary">
            {gitGubUrl}
          </Text>
        </Link>
      </div>
      <div>
        <Text as="span">Email : </Text>
        <Text as="span">{email}</Text>
      </div>
      <div>
        <Text as="span">Phone: </Text>
        <Text as="span">{phone}</Text>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 1rem 0;
`;
