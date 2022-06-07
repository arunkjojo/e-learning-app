# Layout Introduction
    A divider line separates different content.

    https://ant.design/components/layout/

---

# When To Use
    1. Divide sections of article.
    2. Divide inline text and links such as the operation column of table.

---

# Horizontal
    Divider is `horizontal` by default. You can add text within Divider.

---

# Vertical
    Use `type="vertical"` make it vertical.

---

# Devider With Title
    Divider with inner title, set `orientation="left/right"` to align it.

---

# Text Without Heading
    You can use non-heading style of divider text by setting `plain`.

---

# API

    # the wrapper
        `
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Sider>left sidebar</Sider>
                    <Content>main content</Content>
                    <Sider>right sidebar</Sider>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        `
    
    # breakpoint width
    
        `
            {
                xs: '480px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                xxl: '1600px',
            }
        `
        
    # API image
        wrapper: <Layout API.png>
        Sider: <Layout API - Sider.png>

---

## Contributors

- Arun Jojo <arunkjojo>