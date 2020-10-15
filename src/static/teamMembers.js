import teamMemberTags from './teamMemberTags'; 

const teamMembers = [
    {
        name: 'Anri', 
        description: 'High School Senior',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[0]
    }, 

    {
        name: 'Jenny', 
        description: 'Harvard Senior....',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[1]
    }, 

    {
        name: 'Min', 
        description: 'PM @ Microsoft....',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[2]
    }, 

    {
        name: 'Sylvia', 
        description: 'Harvard Sophomore',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[3]
    }, 

    {
        name: 'Vanessa', 
        description: 'Harvard Junior',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[4]
    }, 

]; 

export default teamMembers;