/**
 * Internal dependencies
 */


/**
 * Block constants
 */

const name = 'popover/popover';


const ALLOWED_MEDIA_TYPES = [ 'image' ];
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect } = wp.data;
const { RichTextToolbarButton, MediaUpload, MediaUploadCheck } = wp.blockEditor || wp.editor;
const { applyFormat, removeFormat, getActiveFormat, registerFormatType } = wp.richText;
const { Modal, Popover, Button, TextareaControl} = wp.components;


class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.toggle = this.toggle.bind( this );

		this.state = {
      isOpen: false,
  
			text: '',
      mediaID: {
        type: 'number',
      },
      mediaURL: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'src',
      },
    }
  }
  


  toggle() {
		this.setState( ( state ) => ( {
			isOpen: ! state.isOpen,
		} ) );
	}

  render() {
    const { text,mediaURL,mediaID } = this.state;
    
		const {
			isActive,
			value,
      onChange
		} = this.props;

    const activeColorFormat = getActiveFormat( value, name );

    const onSelectImage = ( media ) => {
      this.setState( {
        mediaURL: media.url,
        mediaID: media.id
      } )
    };

    const _defaultImage = '/wp-content/themes/sched_mvp/img/preview.jpg';
    
		return (
			<Fragment>
				<RichTextToolbarButton
					icon="admin-comments"
					title={ 'Popover' }
					onClick={ this.toggle }
					isActive={ isActive }
				/>
				{ this.state.isOpen && (
					<Modal
						title={ 'Insert Popover' }
						onRequestClose={(event)=>{
              if ( !event.target.closest( 'button[aria-label="Close dialog"]' ) ) {
                return;
              }
              this.toggle();
            }}>

            <div style={{display:'flex'}}>
              <div style={{marginRight:'10px'}}>
                <TextareaControl
                  value={ activeColorFormat && ! text ? activeColorFormat.attributes.text : text }
                    onChange={( newDataContent ) => {
                      this.setState( { text: newDataContent } )
                    }
                  }
                />
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <img style={{width:'40px',height:'40px',margin:'auto'}} src={ activeColorFormat && ! mediaURL ? _defaultImage : mediaURL } />
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={ onSelectImage }
                    allowedTypes={ALLOWED_MEDIA_TYPES}
                    value={ mediaID }
                    render={ ( { open } ) => (
                      <Button isPrimary onClick={ open }>Upload Image</Button>
                    ) }
                  />
                </MediaUploadCheck>
              </div>
            </div>

						<Button isPrimary onClick={ () => {
							if ( text ) {
                let $text = text.replace(/\n/g, '<br/>');
                let $mediaURL = '';
                if ( mediaID ) {
                  $mediaURL = mediaURL;
                  $text = `<p>`+$text+`</p><img src="`+$mediaURL+`" />`
                }

                const attributes = {
                  'text':text,
                  'mediaURL':$mediaURL,
                  'data-content':$text,
                  'tabIndex': '0',
                  'data-toggle': 'popover',
                  'data-placement': 'top',
                  'data-trigger': 'focus',
                  'data-html':'true',
                  'style': 'border-bottom: solid 3px lightblue;cursor:pointer',
                };
                
								onChange(
                  applyFormat( value, {
                    type: name,
                    attributes,
									} )
                  );
                } else {
                  onChange( removeFormat( value, name ) );
                }
                
							this.toggle();
						} }>
							{ 'Apply' }
						</Button>
					</Modal>

				) }
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitPopoversFormats' ),
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled ),
)( Edit );






// // client popover
registerFormatType('popover/popover', {
  title: 'Popover',
  tagName: 'span',
  className: 'pop',
  attributes: {
    text:'text',
    mediaURL:'mediaURL',
    dataContent: 'data-content',
    dataHtml: 'data-html',
    style: 'style'
  },
  edit: Edit,
});