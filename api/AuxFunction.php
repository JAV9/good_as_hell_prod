<?php

class AuxFunction
{

    /**
     * @param $targetDir direccion destino
     * @param $file $_FILES["nombre_puesto_en_formulario"]
     * @param $targetFile
     * @return [code, filename, errors] codigo,nombre del fichero para base datos y errores 
     *          000 - error, no se ha ejecutado el algoritmo
     *          200 - subida ok
     *          401 - subida ko
     *          507 - fichero demasiado grande
     *          403 - fichero repetido
     *          415 - tipo de fichero no admitido   
     */
    public function uploadFile($targetDir, $file)
    {

        $code = "000";

        $response = array("code" => $code);
        $errors = [];

        $fileExtensionsAllowed = ['jpeg', 'jpg', 'png']; // These will be the only file extensions allowed 

        $fileName = $file['name'];
        $fileSize = $file['size'];
        $fileTmpName = $file['tmp_name'];
        $fileType = $file['type'];

        $exp = explode('.', $fileName);

        $fileExtension = strtolower(end($exp));

        $uploadPath = UPLOAD_FOLDER . $targetDir . basename($fileName);


        if (!in_array($fileExtension, $fileExtensionsAllowed)) {

            $errors[] = "This file extension is not allowed. Please upload a JPEG or PNG file";

        }

        if ($fileSize > 4000000) {

            $code = 507;

            $errors[] = "File exceeds maximum size (4MB)";

        }

        if (empty($errors)) {

            $didUpload = move_uploaded_file($fileTmpName, $uploadPath);

            if ($didUpload) {

                $code = 200;

                $response["filename"] = basename($fileName);

            } else {

                $code = 401;

            }
        } else {

            $code = 401;

        }

        $response["code"] = $code;
        $response["errors"] = $errors;

        return $response;

    }

}