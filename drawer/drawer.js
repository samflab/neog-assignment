const inbox = document.querySelector(".menu-inbox");
const sent = document.querySelector(".menu-sent");
const starred = document.querySelector(".menu-starred");
const draft = document.querySelector(".menu-draft");
const trash = document.querySelector(".menu-trash");
const archive = document.querySelector(".menu-archive");

const setInboxStyle = () => {
  inbox.style.color = "#F05454";
  inbox.style.backgroundColor = "#F5F5F5";
};

const removeInboxStyle = () => {
  inbox.style.color = "#30475E";
  inbox.style.backgroundColor = "";
};

const setSentStyle = () => {
  sent.style.color = "#F05454";
  sent.style.backgroundColor = "#F5F5F5";
};

const removeSentStyle = () => {
  sent.style.color = "#30475E";
  sent.style.backgroundColor = "";
};

const setStarredStyle = () => {
  starred.style.color = "#F05454";
  starred.style.backgroundColor = "#F5F5F5";
};

const removeStarredStyle = () => {
  starred.style.color = "#30475E";
  starred.style.backgroundColor = "";
};
const setDraftStyle = () => {
  draft.style.color = "#F05454";
  draft.style.backgroundColor = "#F5F5F5";
};

const removeDraftStyle = () => {
  draft.style.color = "#30475E";
  draft.style.backgroundColor = "";
};

const setTrashStyle = () => {
  trash.style.color = "#F05454";
  trash.style.backgroundColor = "#F5F5F5";
};

const removeTrashStyle = () => {
  trash.style.color = "#30475E";
  trash.style.backgroundColor = "";
};

const setArchiveStyle = () => {
    archive.style.color = "#F05454";
    archive.style.backgroundColor = "#F5F5F5";
  };
  
  const removeArchiveStyle = () => {
    archive.style.color = "#30475E";
    archive.style.backgroundColor = "";
  };

inbox.addEventListener("click", () => {
  setInboxStyle();
  removeSentStyle();
  removeStarredStyle();
  removeDraftStyle();
  removeTrashStyle();
  removeArchiveStyle();
});

sent.addEventListener("click", () => {
  setSentStyle();
  removeInboxStyle();
  removeStarredStyle();
  removeDraftStyle();
  removeTrashStyle();
  removeArchiveStyle();
});

starred.addEventListener("click", () => {
  setStarredStyle();
  removeInboxStyle();
  removeSentStyle();
  removeDraftStyle();
  removeTrashStyle();
  removeArchiveStyle();
});

draft.addEventListener("click", () => {
  setDraftStyle();
  removeInboxStyle();
  removeSentStyle();
  removeStarredStyle();
  removeTrashStyle();
  removeArchiveStyle();
});

trash.addEventListener("click", () => {
  setTrashStyle();
  removeInboxStyle();
  removeSentStyle();
  removeStarredStyle();
  removeDraftStyle();
  removeArchiveStyle();
});

archive.addEventListener("click", () => {
    setArchiveStyle();
    removeInboxStyle();
    removeSentStyle();
    removeStarredStyle();
    removeDraftStyle();
    removeTrashStyle();
  });
