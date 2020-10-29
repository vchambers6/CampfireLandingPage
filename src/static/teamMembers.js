import teamMemberTags from './teamMemberTags'; 

const teamMembers = [
    {
        name: 'Anri', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Anri.png',
        tags: teamMemberTags[0], 
        bio: ` 
                I'm fascinated by space and the stars, 
                but I also love anything related to Canada! 
                Connect with me through the tags below!
            `,
        
    }, 

    {
        name: 'Jenny', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Jenny.png',
        tags: teamMemberTags[1], 
        bio: ` 
                I love neuroscience but also kind of everything else (help). 
                Find me at the tags below! 
            `,
    }, 

    {
        name: 'Min', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/Min.png',
        tags: teamMemberTags[2], 
        bio: ` 
                Working in tech, not enjoying the Seattle gloom currently. 
                Pop my bubble and chat with me via tags ` +String.fromCodePoint(0x1F642) +  
                `Connect with y’all soon!`,
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
                Born and raised in New Orleans, 
                Louisiana! When I'm not studying CS,
                I'm either reading, longboarding, or cooking!


            `,
    }, 

]; 

export default teamMembers;