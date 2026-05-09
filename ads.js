document.querySelectorAll(".ad-slot").forEach((slot) => {
  const provider = slot.querySelector(".ad-provider")

  if (!provider || provider.children.length === 0) {
    slot.hidden = true
  }
})
