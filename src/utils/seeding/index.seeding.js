import { initRoles } from "./roles.seeding";
import { initUsers } from "./users.seeding";

export const initSeeding = () => {
  initUsers();
  initRoles();
};
