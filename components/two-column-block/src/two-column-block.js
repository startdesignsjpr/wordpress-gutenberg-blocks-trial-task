import ReactHtmlParser from "react-html-parser";
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;
const { Button } = wp.components;

class TwoColumnBoxComponents extends Component {
  render() {
    const { attributes, setAttributes } = this.props;
    const { bannerImage, titleText, descriptionText } = attributes;

    let imageUrlNew = "https://s.w.org/images/core/5.8/art-01.jpg";
    if (bannerImage) {
      imageUrlNew = bannerImage;
    }

    return (
      <Fragment>
        <section class={"twoColumnBlock"}>
          <div class="container">
            <div class="row">
              <div class="column">
                <MediaUpload
                  onSelect={(media) => {
                    setAttributes({ bannerImage: media.url });
                    setAttributes({ bannerType: media.type });
                  }}
                  allowedTypes={["image", "video"]}
                  type="image"
                  value={bannerImage}
                  render={({ open }) =>
                    !bannerImage ? (
                      <Button className={"btn btnVideo"} onClick={open}>
                        Upload New Banner
                      </Button>
                    ) : (
                      <Button className={"btn btnVideo"} onClick={open}>
                        Change Banner
                      </Button>
                    )
                  }
                />
                {attributes.bannerType != "video" && (
                  <div>
                    <img src={imageUrlNew} className="bannerImg" />
                  </div>
                )}

                {attributes.bannerType == "video" && (
                  <video controls autoplay muted src={imageUrlNew}></video>
                )}
              </div>
              <div class="column">
                <div class="splits-content">
                  <RichText
                    tagName="h2"
                    placeholder="Title"
                    value={titleText}
                    onChange={(value) => setAttributes({ titleText: value })}
                  />

                  <RichText
                    tagName="p"
                    placeholder="Description"
                    value={descriptionText}
                    onChange={(value) =>
                      setAttributes({ descriptionText: value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

registerBlockType("rc/two-column-block", {
  title: __("Custom Two Column Block", "rc-blocks"),
  description: __("Custom Two Column Block for demo purpose."),
  icon: "button",
  category: "custom-components",
  keywords: [
    __("Custom Two Column", "rc-blocks"),
    __("Split Column", "rc-blocks"),
  ],

  attributes: {
    bannerImage: {
      attribute: "src",
      default: "",
    },
    bannerType: {
      type: "string",
      default: "",
    },
    buttons: {
      type: "array",
      default: [],
    },
    titleText: {
      type: "string",
      default: "Headline Lorem Lipsum",
    },
    descriptionText: {
      type: "string",
      default: "Lorem Lipsum",
    },
  },
  edit: TwoColumnBoxComponents,
  save: function ({ attributes }) {
    const { bannerImage, titleText, descriptionText } = attributes;

    let imageUrlNew = "https://s.w.org/images/core/5.8/art-01.jpg";
    if (bannerImage) {
      imageUrlNew = bannerImage;
    }

    return (
      <>
        <section className={"twoColumnBlock"}>
          <div className="container">
            <div className="row">
              <div className={"column"}>
                {attributes.bannerType != "video" && (
                  <img src={imageUrlNew} className="bannerImg" />
                )}

                {attributes.bannerType == "video" && (
                  <video controls autoplay muted src={imageUrlNew}></video>
                )}
              </div>
              <div className={"column"}>
                {titleText && (
                  <RichText.Content value={titleText} tagName="h2" />
                )}
                {descriptionText && (
                  <RichText.Content value={descriptionText} tagName="p" />
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
});
