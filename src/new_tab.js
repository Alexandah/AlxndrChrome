function bookmark(name, url, description = "") {
  return li({ noHop: "" }, [
    img({
      height: 16,
      width: 16,
      src: "http://www.google.com/s2/favicons?domain=" + url,
      noHop: "",
    }),
    a({ href: url }, name),
    sub({ noHop: "" }, " " + description),
  ]);
}

function bookmarkGroup(title, bookmarks) {
  return li({ class: "col", noHop: "" }, [
    h2({ noHop: "" }, title),
    ul(bookmarks),
  ]);
}

alxndrDOM(
  div({ id: "domHopperRoot", class: "centeredPage", tabindex: 1 }, [
    h1({ noHop: "" }, "New Tab"),
    div({ id: "domHopperStart" }, [
      h2({ noHop: "" }, "Bookmarks"),
      ul({ class: "row", noHop: "" }, [
        bookmarkGroup("Executive", [
          bookmark(
            "Notion",
            "https://www.notion.so/Main-57d6cbb1b3414f4ab5732b15bf9f565c"
          ),
          bookmark("Calendar", "https://calendar.google.com/calendar"),
          bookmark("Gmail", "https://mail.google.com/mail/u/0/#inbox"),
          bookmark(
            "Dashlane",
            "chrome-extension://fdjamakpfbbddfjaooikfcpapjohcfmg/credentials"
          ),
        ]),
        bookmarkGroup("Tools", [
          h3({ noHop: "" }, "Software Dev"),
          ul([
            bookmark("Github", "https://github.com/"),
            bookmark("Gitlab", "https://gitlab.com/"),
            bookmark("Typing practice", "https://www.keybr.com/"),
          ]),
          h3({ noHop: "" }, "Research"),
          ul([
            bookmark("Google Scholar", "https://scholar.google.com/"),
            bookmark(
              "Connected Papers",
              "https://www.connectedpapers.com/",
              "Visual citation graph"
            ),
            bookmark("Elicit", "https://elicit.org/", "Research Assistant"),
          ]),
          h3({ noHop: "" }, "AI Driven"),
          ul([
            bookmark("OpenAI API", "https://beta.openai.com/", "GPT3"),
            bookmark("AIVA", "https://creators.aiva.ai/", "Music Generation"),
            bookmark(
              "Same Energy",
              "https://same.energy/",
              "Visual Search Engine"
            ),
          ]),
        ]),
        bookmarkGroup("Knowledge", [
          h3({ noHop: "" }, "Computer Science"),
          ul([
            bookmark("nand2tetris", "https://www.nand2tetris.org/course"),
            bookmark(
              "jsDelivr",
              "https://stackoverflow.com/questions/17341122/link-and-execute-external-javascript-file-hosted-on-github",
              "import file.js from github"
            ),
          ]),
          h3({ noHop: "" }, "Journals"),
          ul([
            bookmark(
              "SoS",
              "https://www.theseedsofscience.org/",
              "Seeds of Science"
            ),
            bookmark(
              "Journal of Controversial Ideas",
              "https://journalofcontroversialideas.org/"
            ),
          ]),
        ]),
        bookmarkGroup("Money", [
          h3({ noHop: "" }, "Management"),
          ul([
            bookmark(
              "Personal Capital",
              "https://home.personalcapital.com/page/login/app#/dashboard"
            ),
          ]),
        ]),
        bookmarkGroup("Blogs", [
          bookmark("Dwarkesh Patel", "https://dwarkeshpatel.com/"),
        ]),
      ]),
    ]),
  ])
);
