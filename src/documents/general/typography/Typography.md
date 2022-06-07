import TypographyBasic from "./TypographyBasic"

# Typography Introduction
    Basic text writing, including headings, body text, lists, and more.

    https://ant.design/components/typography/

---

# When To Use
    1. When need to display a title or paragraph contents in Articles/Blogs/Notes.
    2. When you need copyable/editable/ellipsis texts.

---

# Basic
    Display the document sample.
    <TypographyBasic />
---

# Title Component
    Display title in different level.

---

# Text and Link Component
    Provides multiple types of text and link.

---

# Interactive
    Provide additional interactive capacity of editable and copyable.

---

# Ellipsis
    Multiple line ellipsis support. You can use tooltip to config ellipsis tooltip. Recommend expandable when have lots of content.

---

# Ellipsis from middle
    You can ellipsis content from middle by customize ellipsis={{ suffix: ... }}.

---

# Suffix
    add suffix ellipsis support.

---

# API
    # Copyable
        
        `
            {
                text: string,
                onCopy: function(event),
                icon: ReactNode,
                tooltips: false | [ReactNode, ReactNode],
            }
        `
    # Editable

        `
            {
                icon: ReactNode,
                tooltip: boolean | ReactNode,
                editing: boolean,
                maxLength: number,
                autoSize: boolean | { minRows: number, maxRows: number },
                onStart: function,
                onChange: function(string),
                onCancel: function,
                onEnd: function,
                triggerType: ('icon' | 'text')[],
                enterIcon: ReactNode,
            }
        `

    # Ellipsis

        `
            {
                rows: number,
                expandable: boolean,
                suffix: string,
                symbol: ReactNode,
                tooltip: boolean | ReactNode,
                onExpand: function(event),
                onEllipsis: function(ellipsis),
            }
        `
        
    # API image
        Typography.Text# <Typography API - Text.png>
        Typography.Title: <Typography API - Title.png>
        Typography.Paragraph: <Typography API - Paragraph.png>
        Copyable: <Typography API - Copyable.png>
        Editable: <Typography API - Editable.png>
        Ellipsis: <Typography API - Ellipsis.png>

---

# How to use Typography.Link in react-router?
    `react-router` support customize render component:

        `
            <Link to="/" component={Typography.Link} />
        `

---

## Contributors

- Arun Jojo <arunkjojo>