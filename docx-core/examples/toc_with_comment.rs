use docx_rs::*;

pub fn main() -> Result<(), DocxError> {
    let path = std::path::Path::new("./output/examples/toc_with_comment.docx");
    let file = std::fs::File::create(&path).unwrap();
    let p1 = Paragraph::new()
        .add_run(Run::new().add_text("!!Hello"))
        .style("Heading1")
        .page_break_before(true);
    let style1 = Style::new("Heading1", StyleType::Paragraph).name("Heading 1");
    let p2 = Paragraph::new()
        .add_run(Run::new().add_text("World"))
        .style("Heading2")
        .page_break_before(true);
    let p3 = Paragraph::new()
        .add_comment_start(
            Comment::new(1)
                .author("bokuweb")
                .date("2019-01-01T00:00:00Z")
                .add_paragraph(Paragraph::new().add_run(Run::new().add_text("Comment"))),
        )
        .add_run(Run::new().add_text("CommentTarget"))
        .add_comment_end(1);

    Docx::new()
        .add_style(style1)
        .add_table_of_contents(
            TableOfContents::new()
                .heading_styles_range(1, 3)
                .alias("Table of contents")
                .add_before_paragraph(p3),
        )
        .add_paragraph(p1)
        .add_paragraph(p2)
        .build()
        .pack(file)?;
    Ok(())
}
