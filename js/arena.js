const channels = [ {
  name: "Facilitators",
  slug: "facilitators-2023-lbbimtf8p9c",
    container: "#facilitators__content",
}, {
  name: "About",
  slug: "yale-gd-night-school-2023-jvf9u9ontay",
  container: "#about__content",
},{
    name: "Acknowledgements",
  slug: "yale-gd-night-school-2023-jvf9u9ontay",
    container: "#acknowledgements__content",
}, {
    name: "Schedule",
    slug: "schedule-2023",
    container: "#schedule__content",
}, {
  name: "Sessions",
    slug: "sessions-2023-2e_fnhsznjy",
    container: "#sessions__content",
}, {
    name: "Reading List",
    slug: "reading-list-2023-tt6anv9fv_y",
    container: "#reading-list__content",
}]



class NightSchoolArenaCMS {
  constructor(channel) {
    this.channel = channel;
    this.data = null;
    this.contents = null;
    this.setup().then(r => console.log('ArenaCMS setup complete'));
  }

  async setup() {
    try {
      await this.getArenaContent();
        this.contents = this.data.contents;
        this.handleNameContent(this.contents);
    } catch (error) {
      console.error('Error during setup:', error);
    }
  }

  async getArenaContent() {
    try {
      if (!this.channel.slug) throw new Error('No channel slug provided');
      const randomString = Math.random().toString(16).slice(2);
      const contentUrl = `https://api.are.na/v2/channels/${this.channel.slug}?sort=position&order=asc&per=100?nocache=${randomString}`;
      const response = await fetch(contentUrl);
      this.data = await response.json();
      // console.log('Arena data:', this.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  }

  async getContents() {
    if (!this.data || !this.data.contents) {
      await this.setup();
      this.contents = this.data.contents
    }
    return this.contents;
  }

  async getBlockByTitle(title) {
    const contents = await this.getContents();
    return contents.find(content => content.title === title);
  }

  handleAboutContent(contents) {
    const content = contents.find(content => content.title === this.channel.name);
    if ( !content && content.class !== 'Text')  return;
    const container = document.querySelector(this.channel.container);
    container.innerHTML = content.content_html;
  }

  handleAcknowledgementsContent(contents) {
    const content = contents.find(content => content.title === this.channel.name);
    if (!content && content.class !== 'Text')  return;
    const container = document.querySelector(this.channel.container);
    container.innerHTML = content.content_html;
  }

  handleScheduleContent(contents) {
      const scheduleContent = document.querySelector(this.channel.container);
    for (const content of contents) {
        if (!content && content.class !== 'Text')  return;
      const title = document.createElement('h2');
      title.classList.add('schedule-date-description');
      title.innerHTML = content.title;
      const ul = document.createElement('ul');
        ul.classList.add('schedule-breakdown-list');
        ul.innerHTML = content.content_html;
      scheduleContent.appendChild(title);
      scheduleContent.appendChild(ul);
    }
  }

  handleFacilitatorsContent(contents) {
      const facilitatorsContent = document.querySelector(this.channel.container);
    for (const content of contents) {
      if (!content && content.class !== 'Image')  return;
      const facilitator_info = document.createElement('div');
      facilitator_info.classList.add('facilitator-info');
      const facilitator_pic_container = document.createElement('figure');
      facilitator_pic_container.classList.add('facilitator-pic-container');
      const facilitator_profile_pic = document.createElement('img');
      facilitator_profile_pic.classList.add('facilitator-profile-pic');
      facilitator_profile_pic.src = content.image.display.url;
      facilitator_pic_container.appendChild(facilitator_profile_pic);

      const facilitator_bio = document.createElement('div');
      facilitator_bio.classList.add('facilitator-bio');
      const facilitator_name = document.createElement('h3');
      facilitator_name.classList.add('facilitator-name');
      facilitator_name.innerHTML = content.title;
const facilitator_description = document.createElement('p');
        facilitator_description.classList.add('facilitator-description');
        facilitator_description.innerHTML = content.description;
        facilitator_bio.appendChild(facilitator_name);
        facilitator_bio.appendChild(facilitator_description);
        facilitator_info.appendChild(facilitator_pic_container);
        facilitator_info.appendChild(facilitator_bio);
        facilitatorsContent.appendChild(facilitator_info);

    }
  }

  handleSessionsContent(contents) {
      const sessionsContent = document.querySelector(this.channel.container);
    for (const content of contents) {
        if (!content && content.class !== 'Text')  return;
        const sessions_title = document.createElement('h2');
        sessions_title.classList.add('sessions-title');
        sessions_title.innerHTML = content.title;

        const sessions_description = document.createElement('p');
        sessions_description.classList.add('sessions-description');
        sessions_description.innerHTML = content.content_html;

        sessionsContent.appendChild(sessions_title);
        sessionsContent.appendChild(sessions_description);
    }
  }

  handleReadingListContent(contents) {
    const readingListContent = document.querySelector(this.channel.container);
    for (const content of contents) {
      if (!content && content.class !== 'Attachment')  return;
      const link = document.createElement('a');
      const item_title = document.createElement('h3');
      item_title.classList.add('reading-list-item-title');
      item_title.innerHTML = content.title;
      link.href = content.attachment.url;
      link.target = '_blank';
      link.appendChild(item_title);
      readingListContent.appendChild(link);
    }
  }

  handleNameContent(content) {
    if (!content) return;
    switch (this.channel.name) {
      case 'About':
        this.handleAboutContent(content);
        break;
        case 'Acknowledgements':
        this.handleAcknowledgementsContent(content);
        break;
      case 'Schedule':
        this.handleScheduleContent(content);
        break;
        case 'Facilitators':
        this.handleFacilitatorsContent(content);
        break;
        case 'Sessions':
        this.handleSessionsContent(content);
        break;
        case 'Reading List':
        this.handleReadingListContent(content);
        break;
    }
  }


}



channels.forEach(channel => new NightSchoolArenaCMS(channel));