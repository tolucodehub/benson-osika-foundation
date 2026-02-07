import newsScholarship from "@/assets/news-scholarship.jpg";
import newsOguMonument from "@/assets/news-ogu-monument.jpg";

export interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "ogu-monument-restoration",
    image: newsOguMonument,
    title: "Ogu Town Landmark Monument & Civic Centre Restoration",
    date: "December 23, 2025",
    content: `In the spirit of Christmas and its significance to giving and sharing love, Engr. Benson Osika through his Foundation, the Benson Osika Foundation has brought smiles and joy to the people of Ogu town in Ogu-Bolo LGA of Rivers State.

The iconic and symbolic Ogu landmark monument, which had gone pale and bruised by the elements and lost its glow has been revamped and modelled into an iconic cultural artistic landmark, showcasing the rich cultural heritage of the Ogu people.

The Ogu Town Civic Arena and Pavilion, a space used for culture, celebration, and community activities was also repainted to reclaim its shine and beauty after enduring periods of harsh weather and human factors.

The Ogu civic centre, now transformed into a shining masterpiece is ready once again for festivals, events, and unforgettable moments. Standing proudly beside it, the Ogu Landmark Monument now rises as a bold cultural and artistic expression—a symbol of heritage, identity, and renewed pride, drawing admiration from the people.

This restoration project represents a deep commitment to preserving the cultural identity of the Ogu people while inspiring future generations to take pride in their heritage. The vibrant artistic expressions adorning the monument tell the stories of the community's history, traditions, and aspirations.

The transformation serves as a beacon of hope and unity, reminding the community of their shared history and collective strength. It stands as a testament to what can be achieved when individuals invest in the betterment of their communities.

This is more than renovation. This is restoration of culture. Revival of community spirit. And a gift to Ogu Town this festive season.

Courtesy of: Engr. Benson Osika & The Benson Osika Foundation.`,
  },
  {
    id: "scholarship-award-elekahia",
    image: newsScholarship,
    title: "Scholarship Award Presentation at State Primary School Elekahia",
    date: "October 28, 2025",
    content: `It was a joyful day on the 28th of October, as parents, pupils and staff of State Primary School Elekahia witnessed the scholarship award presentation to two outstanding pupils of the school, Master Princewill and Miss Favour.

The scholarship award was presented to the pupils by Benson Osika Foundation, for their outstanding academic and social performances. This initiative is part of the Foundation's commitment to identifying and nurturing young talents who demonstrate exceptional dedication to their studies and positive influence within their school community.

The selection process considered not only academic excellence but also character, leadership qualities, and active participation in extracurricular activities. Both recipients have shown remarkable resilience and determination in their educational journey, serving as role models to their peers.

The scholarship covers tuition fees, learning materials, and school supplies, ensuring that these bright minds can focus on their education without financial constraints. The Foundation believes that investing in education is the most powerful tool for breaking the cycle of poverty and creating lasting change in communities.

Parents and teachers expressed deep gratitude for this gesture, noting that such recognition motivates other students to strive for excellence. The Head Teacher of State Primary School Elekahia commended the Foundation for their unwavering support and encouraged other organizations to emulate this noble initiative.

The Benson Osika Foundation remains committed to expanding this program to reach more deserving students across Rivers State and beyond, because every child deserves the opportunity to learn, grow, and achieve their full potential.`,
  },
];

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsItems.find((news) => news.id === id);
};
