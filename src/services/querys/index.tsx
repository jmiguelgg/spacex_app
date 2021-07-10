import {gql} from "@apollo/client";

export interface LaunchesPastData {
  mission_name: string;
  launch_date_local: Date;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    flickr_images: string[];
  };
  rocket: {
    rocket_name: string;
  };
};

export interface LaunchesPastVars {
  limit: number;
};

const GET_LAUCHES = gql`
query LaunchesPast($limit: Int){
  launchesPast(limit: $limit) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      flickr_images
    }
    rocket {
      rocket_name
    }
  }
}`;

export {GET_LAUCHES};