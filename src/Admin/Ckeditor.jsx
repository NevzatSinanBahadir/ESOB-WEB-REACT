import React from 'react'

import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';





const Ckeditor = () => {


    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col'>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onReady={editor => {


                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}

                    />
                </div>
            </div>



        </div>
    )
}

export default Ckeditor
