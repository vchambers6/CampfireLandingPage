import teamMemberTags from './teamMemberTags'; 

const teamMembers = [
    {
        name: 'Anri', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Anri.png',
        tags: teamMemberTags[0], 
        bio: ` 
                this is my bio 
            `,
        
    }, 

    {
        name: 'Jenny', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Jenny.png',
        tags: teamMemberTags[1], 
        bio: ` 
                this is my bio 
            `,
    }, 

    {
        name: 'Min', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Min.png',
        tags: teamMemberTags[2], 
        bio: ` 
                this is my bio 
            `,
    }, 

    {
        name: 'Sylvia', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Sylvia.png',
        tags: teamMemberTags[3], 
        bio: ` 
                this is my bio 
            `,
    }, 

    {
        name: 'Vanessa', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Vanessa.png',
        tags: teamMemberTags[4], 
        bio: ` 
                this is my bio 
            `,
    }, 

]; 

export default teamMembers;