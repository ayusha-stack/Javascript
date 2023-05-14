const myInfo = {
    name: 'Aayusha Bista',
    address: 'Greenland,Tokha,Kathmandu',
    emails: ['ayusha.bista11@gmail.com', 'tha075bct@tcioe.edu.np'],
    interests: ['books','machine learning', 'web development'],
    education: [
      {
        name: 'ABC School of Schoolery',
        enrolledDate: '2000'
      },
      {
        name: 'BCD School of Trickery',
        enrolledDate: '2006'
      }
    ]
  };
  
  // Create a new array with updated education information
  const myEducation = myInfo.education.map(program => {
    return {
      name: program.name,
      date: program.enrolledDate
    };
  });
  
  // Iterate over the new education array and print the information in the desired format
  myEducation.forEach(program => {
    console.log(`Name: ${program.name}, Date: ${program.date}`);
  });
  

