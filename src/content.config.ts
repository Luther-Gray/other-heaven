import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolioTags = z.enum([
  "2D",
  "3D",
  "Pixel",
  "Concept",
  "Voxel",
  "Code",
  "Mod",
  "Design",
]);

const blogTags = z.enum([
    "Rant",
    "Video Games",
    "Design",
    "Game Design",
    "Technology",
    "Culture",
    "Tutorial",
    "Other"
])

const devlogTags = z.enum([
    "Thelma",
    "Thelma-TFE",
    "Fantasia",
    "Pokemon NEXT",
    "Sonic ALTER",
    "Open Dungeon",
    "Looper",
    "Voxterra",
    "The Gaia Crisis"
])

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      imageName: z.string(),
      imageFile: image(),
      imageDate: z.coerce.date(),
      imageTag: z.array(portfolioTags).default([]),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/blog" }),
  schema: ({image}) => z.object({
    blogTitle: z.string(),
    blogDate: z.coerce.date(),
    blogTag: z.array(blogTags).default([]),
    blogIcon: image(),
  })
});

const devlogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/devlog" }),
  schema: z.object({
    devlogTitle: z.string(),
    devlogDate: z.coerce.date(),
    devlogTag: z.array(devlogTags).default([]),
  })
});

export const collections = {
  portfolio: portfolioCollection,
  blog: blogCollection,
  devlog: devlogCollection
};
