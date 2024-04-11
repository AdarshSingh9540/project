import React from 'react';

interface InterviewRound {
    round_name: string;
    questions: string[];
}

const interviewRounds: InterviewRound[] = [
    {
        round_name: "Round 1: Fundamentals",
        questions: [
            "What are the principles of design? How do you apply them in your design process?",
            "What is the difference between a vector graphic and a raster graphic? When would you use each?",
            "How do you ensure that your designs are accessible to people with disabilities?"
        ]
    },
    {
        round_name: "Round 2: Figma and Frimer",
        questions: [
            "What is your experience with Figma and Frimer? Can you explain their features and capabilities?",
            "How do you use Figma and Frimer to collaborate with others in a design project?",
            "Can you give an example of a project you worked on that required you to use both Figma and Frimer?"
        ]
    },
    {
        round_name: "Round 3: Photoshop and Canva",
        questions: [
            "What is your experience with Photoshop and Canva? Can you explain their features and capabilities?",
            "How do you use Photoshop and Canva to create and edit images for design projects?",
            "Can you give an example of a project you worked on that required you to use both Photoshop and Canva?"
        ]
    },
    {
        round_name: "Round 4: Soft Skills",
        questions: [
            "Can you give an example of a time when you had to work with a difficult client or stakeholder? How did you handle the situation?",
            "How do you stay up-to-date with the latest trends and skills in graphic design?",
            "Can you describe a project you worked on that required you to communicate effectively with a non-technical stakeholder?"
        ]
    }
];

export { interviewRounds };
