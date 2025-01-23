import Image from 'next/image';

const teamMembers = [
    {
        name: 'Shruti Mahajan',
        description: 'Teacher',
        image: '/',
    },
    {
        name: 'Luodi Wang',
        description: 'User Experience Design',
        image: '/images/luodi.jpg',
    },
    {
        name: 'James Lin',
        description: 'Computer Vision and User Experience Design',
        image: '/images/james.jpeg',
    },
    {
        name: 'Ramissa Khan',
        description: 'Developing Digital Immersive Experiences for Anxiety Relief through Data Visualization',
        image: '/images/Ramissa.jpg',
    },
    {
        name: 'Victor Wong',
        description: 'Computer Vision and User Experience Design',
        image: '/images/victor.jpg',
    },
    {
        name: 'Natalie Pinto',
        description: 'Computer Science Major - ASL-Centric User Interfaces',
        image: '/images/natalie.jpg',
    },
    {
        name: 'Kshitij Agarwal ',
        description: 'Brain-Computer Interfaces & Computer Vision ',
        image: '/images/Kshitij.jpeg',
    }
];
export default function Team() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }}>Meet Our Team</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={{
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        padding: '15px',
                        maxWidth: '250px',
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}>
                        <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%' }}>
                            <Image
                                src={member.image}
                                alt={`${member.name}'s picture`}
                                width={200}
                                height={200}
                                style={{ objectFit: 'contain' }} // Changed to 'contain'
                            />
                        </div>
                        <h3 style={{ margin: '10px 0' }}>{member.name}</h3>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}