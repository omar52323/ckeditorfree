import { Component, ViewEncapsulation } from '@angular/core';
import {  Essentials,  Mention, Paragraph, Undo } from 'ckeditor5';

import {
  DecoupledEditor,
  GeneralHtmlSupport,
  Strikethrough,
  Subscript,
  Superscript,
  FontFamily,
  FontSize,
  Indent,
  Table,
  TableProperties,
  TableCellProperties,
  TextPartLanguage,
  TableToolbar ,
	Alignment,
	Autoformat,
	Bold,
	CKBox,
	CloudServices,
	EasyImage,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	Heading,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Base64UploadAdapter,
	IndentBlock,
	Italic,
	Link,
	List,
	ListProperties,
	MediaEmbed,
	PageBreak,
	Font,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	TableCaption,
	TodoList,
	TableColumnResize,
  AutoImage,
	ClassicEditor,
	TextTransformation,
	Underline,
  ImageResizeEditing, ImageResizeHandles,icons,LinkImage 
} from 'ckeditor5';



@Component({
  selector: 'app-edit-document',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './edit-document.component.html',
  styleUrl: './edit-document.component.scss'
})
export class EditDocumentComponent {
//public Editor = DecoupledEditor;
title = 'angular';


public showComments = false;
public load = false;
public comments = [];
public configComments = false;
llave = 'Por favor no edite los textos que se encuentran entre doble {{ejemplo}}'
myEditor;
result;
contentHtml: string = '';
editorContent: string = '';
public Editor = ClassicEditor;


    public config = {

      
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic','insertTable', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor','todoList','bulletedList', 'numberedList','heading','alignment'],
        plugins: [
            Bold, Essentials, Italic, Mention, Paragraph, Undo,PasteFromOffice,GeneralHtmlSupport
            , Table, TableProperties, TableCellProperties, FontColor, FontBackgroundColor ,TableToolbar,TableCaption,
            TableColumnResize,TextTransformation,Font , Image, AutoImage,TodoList,List,Heading,ImageUpload,Alignment , ImageResizeEditing, ImageResizeHandles,TableProperties,TableCellProperties
            , ImageToolbar, ImageCaption, ImageStyle, ImageResize,LinkImage 
          ],
        table: {
          contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells','tableProperties','tableCellProperties' ]
      }, 
      image: {
        toolbar: [ 'toggleImageCaption', 'imageTextAlternative' ,
          'imageStyle:block',
          'imageStyle:side',
          'imageStyle:inline',
          'imageTextAlternative',
          '|',
          'linkImage'
        ]
    }

      


      
        //licenseKey: 'amRyTXoxREc4MjlpQmJzdnd1dngyd1VNcEZhL3dRNUJKV05HMm45dXlPcEJWT1JtK0IwNC9CZTdjcW1Ec2c9PS1NakF5TkRFeE1EST0=',
        // mention: {
        //     Mention configuration
        // }
    }


constructor(
    //private documentService: DocumentService,
    //private route: ActivatedRoute,
    //private comentService: CommentService,
    //public message: AlertService,
    //private readonly _sanitizer: DomSanitizer,
) {
    //this.config = this.route.snapshot.params;

}
ngOnInit(): void {
    //this.loadData();

}
  saveData(){
    
  }

  
    
    
  
  
  

}
