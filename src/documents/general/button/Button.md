# Button Introduction
    https://ant.design/components/button/

---

# When To Use
    A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

    In Ant Design we provide 5 types of button.

        1. Primary button: indicate the main action, one primary button at most in one section.

        2. Default button: indicate a series of actions without priority.

        3. Dashed button: used for adding action commonly.

        4. Text button: used for the most secondary action.

        5. Link button: used for external links.

    And 4 other properties additionally.

        1. danger: used for actions of risk, like deletion or authorization.

        2. ghost: used in situations with complex background, home pages usually.

        3. disabled: when actions are not available.

        4. loading: add loading spinner in button, avoiding multiple submits too.

---

# Type 
    There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in antd.
    
---

# Icon 
    Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.

    If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.

---

# Size
    Ant Design supports a default button size as well as a large and small size.

    If a large or `small` button is desired, set the size property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.

---

# Disables
    To mark a button as `disabled`, add the `disabled` property to the `Button`.

---

# Loading
    A loading indicator can be added to a button by setting the `loading` property on the `Button`.

---

# Multiple Button
    If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `Dropdown.Button`.
---

# Gost Button
    `ghost` property will make button's background transparent, it is commonly used in colored background.
---

# Danger Button
    `danger` is a property of button after antd 4.0 v.

---

# Block Button
    `block` property will make the button fit to its parent width.

---

# API
    API image: <Button API.png>

---

# How to remove space between 2 chinese characters?
    Following the Ant Design specification, we will add one space between if Button (exclude Text button and Link button) contains two Chinese characters only. If you don't need that, you can use ConfigProvider to set `autoInsertSpaceInButton` as `false`.

---

## Contributors

- Arun Jojo <arunkjojo>