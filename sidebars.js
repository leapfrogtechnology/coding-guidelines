module.exports =
{
  "docs": {
    "Overview": [
      "introduction",
      "general/clean-code"
    ],
    "REST API": [
      "rest-api/headers",
      {
        "type": "category",
        "label": "Methods",
        "items": [
          "rest-api/naming-convention",
          "rest-api/get",
          "rest-api/post",
          "rest-api/put",
          "rest-api/patch",
          "rest-api/delete"
        ]
      },
      "rest-api/security",
      "rest-api/versioning"
    ],
    "GitHub": [
      "git/branch-naming-convention",
      "git/branching-strategy",
      "git/smart-commit",
      {
        "type": "category",
        "label": "Release Management",
        "items": [
          "git/tagging"
        ]
      },
      "git/pull-request-best-pratices",
      "git/code-review-checklist"
    ],
    "Python": [
      "python/environment-and-dependency",
      "python/project-structure",
      {
        "type": "category",
        "label": "Practices and Tools",
        "items": [
            "python/general",
            "python/tools"
        ]
      },
      "python/docstrings",
      {
        "type": "category",
        "label": "Naming Convention",
        "items": [
          "python/files",
          "python/variables",
          "python/functions",
          "python/classes"
        ]
      },
      "python/exceptions",
      "python/logging",
      "python/testing"
    ],
    "JavaScript": [
      {
        "type": "category",
        "label": "Naming Convention",
        "items": [
          "javascript/variables",
          "javascript/functions",
          "javascript/classes"
        ]
      },
      {
        "type": "category",
        "label": "General Coding Guidelines",
        "items": [
          "javascript/js-general-guidelines",
        ]
      }
    ],
    "Java": [
      {
        "type": "category",
        "label": "Naming Convention",
        "items": [
          "java/packages",
          "java/classes",
          "java/interfaces",
          "java/variables",
          "java/functions"
        ],
      },
      "java/logging",
      "java/tools",
      {
        "type": "category",
        "label": "Effective Java",
        "items": [
          "java/effective-java"
        ]
      }
    ],
    "NoSQL" : [
      {
        "type": "category",
        "label": "Document DB",
        "items": [
            "nosql/documentdb/document-db-naming-convention",
            "nosql/documentdb/one-to-one-relationship",
            "nosql/documentdb/one-to-many-relationship",
            "nosql/documentdb/many-to-many-relationship"
        ]
      }
    ]
  }
}
