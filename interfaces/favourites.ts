import { MediaType } from '~/interfaces/api-results';

export type Favorite = {
  id: string;
  mediaType: MediaType;
  name: string;
  thumb: string;
};
