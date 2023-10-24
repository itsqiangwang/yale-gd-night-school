class ArenaCMS {
  constructor(channel) {
    this.channel = channel;
    this.data = null;
    this.contents = null;
  }

  async setup() {
    try {
      await this.getArenaContent();
    } catch (error) {
      console.error('Error during setup:', error);
    }
  }

  async getArenaContent() {
    try {
      const randomString = Math.random().toString(16).slice(2);
      const contentUrl = `https://api.are.na/v2/channels/${this.channel}?sort=position&order=asc&per=100?nocache=${randomString}`;
      const response = await fetch(contentUrl);
      this.data = await response.json();
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  }

  async metaDescription() {
    await this.setup();
    return this.data ? this.data.metadata.description : '';
  }

  async getContents() {
    if (!this.contents) {
      await this.setup();
      this.contents = this.data ? this.data.contents.map(content => ({
        title: content.title,
        image: content.image ? content.image.display.url : undefined,
        link: content.attachment.url
      })) : [];
    }
    return this.contents;
  }

  async getTitlesFromContents() {
    const contents = await this.getContents();
    return contents.map(content => content.title);
  }
}

const nightSchool = new ArenaCMS("yale-gd-night-school-2023");
nightSchool.metaDescription().then((data) => {
  document.querySelector("#about__content").innerHTML = data;
}).catch((error) => console.log(error));

// const readingMaterials = new ArenaCMS("reading-list-2023-tt6anv9fv_y");
