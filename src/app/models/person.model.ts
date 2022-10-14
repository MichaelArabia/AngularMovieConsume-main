import { ActIn } from "./actorIn.model";

export interface Person {
  id: number;
  lastName: string;
  firstName: string;
  actAs: ActIn[];
}
