import { useParams } from "react-router-dom";
import { UserDetailCard } from "../../components/UserDetailCard";

export const UserDetails = () => {
  const { slug } = useParams();
  return (
    <section>
      <UserDetailCard slug={slug} />
    </section>
  );
};
