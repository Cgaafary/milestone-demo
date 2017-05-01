import { gql } from 'react-apollo';

export default gql`
query GetPC1Milestones {
    allMilestones(filter: {
        competency: {id: "cj256rh1743h10182haa5k7pu"}
    }) {
        id
        description
        level
    }
}
`;