describe('File Upload',()=>{
    it("File Upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('test01.pdf')
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it("File Upload with rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'test01.pdf',fileName:'myFIle.pdf'})
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it("File Upload Drag and drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('test01.pdf',{ subjectType: 'drag-n-drop' })
        // cy.get('#file-submit').click();
        // cy.wait(3000)
        // cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it("Upload multiple file",()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['test01.pdf','test02.pdf']);
        cy.wait(3000);
        cy.get("#fileList>li").should('have.length',2)
    })
    it.only("Upload file Shadow- dom",()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test01.pdf');
        cy.wait(5000);
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test01.pdf')
    })
})