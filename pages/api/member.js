// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client, gql } from "@/graph";

export default async function handler(req, res) {
  const query = gql`
    query MemberPage {
      memberPages {
        heading
        description
        member(first: 120) {
          name
          email
          domain
          image {
            url
            height
            width
          }
          github
          linkedin
          other
        }
        leads {
          name
          email
          domain
          image {
            url
            height
            width
          }
          github
          linkedin
          other
        }
        others {
          name
          email
          domain
          image {
            url
            height
            width
          }
          github
          linkedin
          other
        }
      }
    }
  `;
  
  await client.request(query)
  .then((data) => {
    console.log(data);
    res.status(200).json({
      data: data.memberPages[0],
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  });
}