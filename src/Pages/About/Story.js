import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default function Story() {
    return (
        <Container>
            <Typography
                variant={"h3"}
                color={"primary"}
            >
                STORY:
            </Typography>
            <Typography
                variant={"secondaryText"}
                align={"center"}
            >
                Information about the Sweet Pickings concept and story goes here...

                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </Typography>
        </Container>
    )
}
