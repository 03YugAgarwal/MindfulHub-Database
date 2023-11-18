import BlogItem from "./BlogItem";

import "../styles/BlogPage.css";

const DUMMY_VALUE = [
  {
    key: "1",
    title: "The Art of Minimalist Living",
    desc: "Explore the principles of minimalist living, decluttering your space, and simplifying your life. Learn how to create a serene and organized home that promotes peace and mindfulness.",
    author: "Swarab Raul",
  },
  {
    key: "2",
    title: "Mastering the Basics of Healthy Cooking",
    desc: "If you're looking to improve your culinary skills and adopt a healthier lifestyle, this blog post is for you. Learn about essential cooking techniques, ingredient substitutions, and simple recipes to kickstart your journey towards better nutrition.",
    author: "Swarab Raul",
  },
  {
    key: "3",
    title: "The Art of Minimilistic Living",
    desc: "Expore the principles of minimilistic living, decluttering your space and simplifying your life. Learn how to create a serene and organised home that promotes peace and mindfulness.",
    author: "Emily Johnson",
  },
  {
    key: "4",
    title: "Mastering the Basics of Healthy Cooking",
    desc: "If your looking to improve your culinary skills and adopt a healthier lifestyle, this blog post is for you. Learn about essential cooking techniques, ingredient substitutions and simple recipies to kickstart your journey towards better nutrition.",
    author: "Daniel Rodriguez",
  },
  {
    key: "5",
    title: "Be More with Less",
    desc: "Founded by Courtney Carver, Be More with Less is a blog about downsizing, creating space to notice your life and how to enjoy what matters most to you.After spending much of her adult life tired, stressed, sick, and doing work she didn’t care about, Courtney decided to let go and unclutter. In he process, she went from a multiple sclerosis diagnosis to feeling the best she’s felt in decades. And she went from being deep in debt and clutter to living debt- and clutter-free.",
    author: "Jasmine Patel",
  },
  {
    key: "4",
    title: "Mastering the Basics of Healthy Cooking",
    desc: "If your looking to improve your culinary skills and adopt a healthier lifestyle, this blog post is for you. Learn about essential cooking techniques, ingredient substitutions and simple recipies to kickstart your journey towards better nutrition.",
    author: "Daniel Rodriguez",
  },
  {
    key: "5",
    title: "Be More with Less",
    desc: "Founded by Courtney Carver, Be More with Less is a blog about downsizing, creating space to notice your life and how to enjoy what matters most to you.After spending much of her adult life tired, stressed, sick, and doing work she didn’t care about, Courtney decided to let go and unclutter. In he process, she went from a multiple sclerosis diagnosis to feeling the best she’s felt in decades. And she went from being deep in debt and clutter to living debt- and clutter-free.",
    author: "Jasmine Patel",
  },
  {
    key: "6",
    title: "Simply + Fiercely",
    desc: "This is a blog about how to recover from a life that looks good on the outside but feels wrong on the inside. It’s a blog about taking control of your life and clearing out the clutter. It’s about being honest with yourself, listening to your heart, doing more of what you love, and learning to let go of all the rest.",
    author: "Michelle Lee",
  },
  {
    key: "7",
    title: "Rowdy Kittens",
    desc: "Rowdy Kittens is a blog created by Tammy Strobel, writer, photographer, and cat lover. Tammy was working at an investment management firm in Davis, California, and was caught up in the “work-spend treadmill.” Until one day she upped and left. She and her husband began donating their belongings to charity until they were left with just 100 personal items. They now live in a 400-square-foot studio where Tammy happily works as a web designer and freelance writer. She owns four plates, three pairs of shoes, and two pots.",
    author: "Ava Smith",
  },
  {
    key: "8",
    title: "Practicing Simplicity",
    desc: "Practising Simplicity, established in 2008 by Jodi Wislon, is a family and lifestyle blog. It’s a story of motherhood and the home, simple living, and good intentions. It covers a range of topics including the family home, motherhood, yoga, pregnancy, photography, travel, and lifestyle.",
    author: "Noah Chang ",
  },
  {
    key: "9",
    title: "Raising Simple",
    desc: "Raising Simple is the creation of Zoë Kim, author of the book Minimalism for Families. She’s the mother of four, and she partners with individuals who want to tackle the challenges of a cluttered home and life. Zoë believes in developing a minimalist lifestyle through positive perspective changes and practical solutions. Her goal is to help you find the best solution to simplify your home and life.",
    author: "Maya Patel",
  },
  {
    key: "10",
    title: "Tiny Ambitions",
    desc:
      "Tiny Ambitions is a blog and podcast about living a tiny, simple, intentional life. It’s based on the counter-cultural idea that life doesn’t need to be lived big. Tiny Ambitions was founded by Britt, a freelance writer, who writes about minimalism, decluttering, simple living, lifestyle, relationships, health & wellbeing, tiny houses, and sustainable living.",
    author: "Olivia Bennett",
  },
];

const BlogPage = () => {
  return (
    <div className="blogPage__main" >
      <h1>Blogs</h1>
      <h4>
        Our mental well-being blog offers expert insights, tips, and personal
        stories to boost your mental health. Join our community and find
        inspiration for a happier, healthier mind.
      </h4>
      <div className="blogPage" >
        {DUMMY_VALUE.map((item) => {
          return (
            <BlogItem
              key={item.key}
              id={item.key}
              title={item.title}
              desc={item.desc}
              author={item.author}
            />
          );
        })}
      </div>
      {/* 
      {
        DUMMY_VALUE.map((item) => {
          return (
            <div className="blog" key={item.key}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h5>{item.author}</h5>
            </div>
          );
        })
      } */}
      {/* <button>Load More</button> */}
    </div>
  );
};

export default BlogPage;
