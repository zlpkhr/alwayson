import TdClient from "tdweb";

declare global {
  const tdweb: {
    default: typeof TdClient;
  };
}
