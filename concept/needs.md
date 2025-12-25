# What I Need [Pages]
1. Home Page - Display navigation to other pages.
    - Blog
    - Portfolio
    - Games
    - Music
    - Devlogs
    - Socials
2. Blog - A repository of my writings. Needs Tag System so it's easier to navigate my posts.
    - Each Blog is its own markdown page. With thumbnail picture?
3. Portfolio - Showcase of my work. I work in various forms so I need to showcase each one differently.
    - 2D Art
    - 3D Art [Characters]
    - 3D Art [Enviroment]
    - Graphic Design
    - Product Design
    - Pixel Art
    - Voxel Art
    - Textures
    - Code Snippets
    - Mods & Rom Hacks
4. Games - Display an arrangement of my Top 100 Games. When you hover over each one, maybe it shows my thoughts about how that game impacted me and what I took away from it?
    - Each Game May or May Not get a Review Page when clicked on.
5. Music - Display an arrangement of my Top 100 Music Albums. When hovering over each, it displays my favorite song from that album?
    - Clicking on an Album will take you to a purchase page maybe.
6. Devlogs - A showcase of the various things I'm constantly working on. I work on a variety of projects, so this will need to be a flexible showcase.
    - Game Dev Logs
    - World Building Logs
    - Software Dev Logs
    - Hardware Build Logs
7. Socials - I can't be found everywhere, but I do have contacts that you can find to keep up with me or contact me. No extra pages needed here.

---

NOTE ABOUT MODEL SHADING

I had to Edit the GLTFs of the models using the following tweaks:

1. Just after "Assets", I added
`"extensionsUsed":[
    "KHR_materials_unlit"
  ],
` So now, the top of the GLTF looks like

```
{
  "asset": { "version": "2.0", "generator": "Blockbench 5.0.4 glTF exporter" },
  "extensionsUsed":[
    "KHR_materials_unlit"
  ],
  ...
```

2. In "Materials"[], I had to add
    `
    "extensions": {
        "KHR_materials_unlit": {}
      },
    `
    So now that Array looks like

    ```
    "materials": [
    {
      "pbrMetallicRoughness": {
        "metallicFactor": 0,
        "roughnessFactor": 1,
        "baseColorTexture": { "index": 0 }
      },
      "extensions": {
        "KHR_materials_unlit": {}
      },
      "alphaMode": "MASK",
      "alphaCutoff": 0.05,
      "doubleSided": true
    },
    {
      "pbrMetallicRoughness": {
        "metallicFactor": 0,
        "roughnessFactor": 1,
        "baseColorTexture": { "index": 1 }
      },
      "extensions": {
        "KHR_materials_unlit": {}
      },
      "alphaMode": "MASK",
      ...
    ```

Together, these tweaks allow me to keep using the Model Viewer, but with Blockbench's unshaded models.