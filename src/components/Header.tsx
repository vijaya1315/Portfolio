
export default function Header() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")

    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    }
  }

  return (
    <div className="header">
        <button onClick={toggleTheme} className="switchButotn">Toggle</button>
        <input type="checkbox" name="" id="" onChange={toggleTheme} />
    </div>

  )
}
